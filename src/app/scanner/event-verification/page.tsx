"use client";

import { useEffect, useRef, useState } from "react";
import {
  Html5Qrcode,
  Html5QrcodeCameraScanConfig,
  CameraDevice,
} from "html5-qrcode";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface QrScannerProps {
  onScanSuccess: (decodedText: string) => void;
}

const QrScanner: React.FC<QrScannerProps> = ({ onScanSuccess }) => {
  const qrCodeRegionId = "qr-scanner";
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const hasScannedRef = useRef(false);

  const [cameras, setCameras] = useState<CameraDevice[]>([]);
  const [currentCameraIndex, setCurrentCameraIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const startScanner = async (cameraId: string) => {
    try {
      const config: Html5QrcodeCameraScanConfig = {
        fps: 10,
        qrbox: { width: 300, height: 300 },
      };

      await scannerRef.current?.start(
        cameraId,
        config,
        (decodedText) => {
          if (!hasScannedRef.current) {
            console.log("QR Code Scanned:", decodedText);
            hasScannedRef.current = true;
            onScanSuccess(decodedText);
          }
        },
        (errorMessage) => {
          console.log("Scan error:", errorMessage);
        }
      );
    } catch (err) {
      console.error("Start scanner error:", err);
      setError("Unable to start camera. Please check permissions.");
    } finally {
      setLoading(false);
    }
  };

  const switchCamera = async () => {
    if (!cameras.length) return;
    try {
      setLoading(true);
      await scannerRef.current?.stop();
      await scannerRef.current?.clear();

      const nextIndex = (currentCameraIndex + 1) % cameras.length;
      setCurrentCameraIndex(nextIndex);
      await startScanner(cameras[nextIndex].id);
    } catch (err) {
      console.error("Switch camera error:", err);
      setError("Failed to switch camera.");
    }
  };

  useEffect(() => {
    const initScanner = async () => {
      try {
        scannerRef.current = new Html5Qrcode(qrCodeRegionId);

        const devices = await Html5Qrcode.getCameras();
        if (!devices.length) {
          setError("No camera devices found.");
          return;
        }

        setCameras(devices);

        const backCameraIndex =
          devices.findIndex((d) => d.label.toLowerCase().includes("back")) ?? 0;

        const indexToUse = backCameraIndex !== -1 ? backCameraIndex : 0;
        setCurrentCameraIndex(indexToUse);

        await startScanner(devices[indexToUse].id);
      } catch (err) {
        console.error("Error initializing scanner:", err);
        setError("Failed to access the camera.");
        setLoading(false);
      }
    };

    initScanner();

    return () => {
      hasScannedRef.current = false;
      scannerRef.current?.stop().then(() => {
        scannerRef.current?.clear();
      });
    };
  }, []);

  return (
    <div className="w-5/6 mx-auto text-center">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div id={qrCodeRegionId} className="mb-4 rounded-lg overflow-hidden" />

      {loading && (
        <div className="flex justify-center items-center mb-4">
          <Loader2 className="animate-spin w-6 h-6 mr-2" />
          <span>Starting camera...</span>
        </div>
      )}

      {cameras.length > 1 && !loading && (
        <Button onClick={switchCamera} variant="outline">
          Switch Camera
        </Button>
      )}
    </div>
  );
};

export default function Home() {
  const router = useRouter();

  const handleScan = (id: string) => {
    router.push("/scanner/event-verification/" + id);
  };

  return (
    <div>
      <h1 className="mt-16 mb-5 text-2xl text-center font-semibold">
        Scan QR Code for verification
      </h1>
      <QrScanner onScanSuccess={handleScan} />
    </div>
  );
}
