﻿using System;
using System.IO;
using JetBrains.Annotations;

namespace VideoHandler
{
    internal class Program
    {
        static void Main([NotNull][ItemNotNull] string[] args)
        {
            if(args.Length < 1 || args.Length > 2)
            {
                Console.WriteLine("Usage: <ProgramName>.exe <File/camera path> [period (sec)]");
            }

            var filePath = args[0];
            if (!File.Exists(filePath))
            {
                //logging
                Console.WriteLine("Error: Path is invalid!");
            }

            CameraControl cameraControl;
            if (args.Length == 2 && int.TryParse(args[1], out var secDelay))
            {
                cameraControl = new CameraControl(filePath, secDelay);
            }
            else
            {
                cameraControl = new CameraControl(filePath);
            }
            cameraControl.Run();
        }
    }
}