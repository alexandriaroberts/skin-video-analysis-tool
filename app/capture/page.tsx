'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Camera, RefreshCcw, Sun, SunDim, Zap } from 'lucide-react';

export default function CapturePage() {
  const [step, setStep] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  const steps = [
    {
      title: 'Bright Light',
      description: 'Take a photo in bright, natural lighting',
      icon: Sun,
    },
    {
      title: 'Dim Light',
      description: 'Take a photo in slightly dimmer lighting',
      icon: SunDim,
    },
    {
      title: 'With Flash',
      description: "Take a photo using your device's flash if available",
      icon: Zap,
    },
    {
      title: 'Different Angle',
      description: 'Take a photo from a slight angle (15-30 degrees)',
      icon: Camera,
    },
    {
      title: 'Final Photo',
      description: 'Take one final photo in the best lighting condition',
      icon: Camera,
    },
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const imageData = canvasRef.current.toDataURL('image/jpeg');
        setImages([...images, imageData]);
        setStep(step + 1);

        if (step === 4) {
          submitImages([...images, imageData]);
        }
      }
    }
  };

  const submitImages = async (allImages: string[]) => {
    try {
      const results = await Promise.all(
        allImages.map(async (image) => {
          const response = await fetch('http://localhost:3000', {
            method: 'POST',
            body: image.split(',')[1],
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          });
          return response.json();
        })
      );

      router.push(
        `/results?data=${encodeURIComponent(JSON.stringify(results))}`
      );
    } catch (error) {
      console.error('Error submitting images:', error);
    }
  };

  const retakePhoto = () => {
    setImages(images.slice(0, -1));
    setStep(step - 1);
  };

  // Start camera when component mounts
  useState(() => {
    startCamera();
  }, []);

  const CurrentIcon = steps[step]?.icon || Camera;

  return (
    <div className='min-h-screen bg-background p-4 flex items-center justify-center'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CurrentIcon className='h-5 w-5' />
            {steps[step]?.title || 'Complete'}
          </CardTitle>
          <CardDescription>{steps[step]?.description}</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Progress value={(step / 5) * 100} className='w-full' />

          <div className='relative aspect-[4/3] overflow-hidden rounded-lg bg-muted'>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className='absolute inset-0 h-full w-full object-cover'
            />
            <canvas ref={canvasRef} className='hidden' />
          </div>
        </CardContent>
        <CardFooter className='flex gap-2'>
          {step > 0 && (
            <Button variant='default' onClick={retakePhoto}>
              <RefreshCcw className='mr-2 h-4 w-4' />
              Retake
            </Button>
          )}
          {step < 5 && (
            <Button className='flex-1' onClick={captureImage}>
              <Camera className='mr-2 h-4 w-4' />
              Capture Photo {step + 1}/5
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
