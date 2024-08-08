'use client';

import { PropsWithChildren } from 'react';

import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient';

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div>
			<main className="container mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 pb-6 pt-6 align-middle">
				<ShaderGradientCanvas
					importedFiber={{
						...fiber,
						...drei,
						...reactSpring,
					}}
					className="-z-30 opacity-100 transition-transform duration-300 ease-in-out"
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100vw',
						height: '100vh',
						pointerEvents: 'none',
					}}
					eventPrefix="client"
					pixelDensity={1.4}
				>
					<ShaderGradient
						control="query"
						urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false&zoomOut=false"
					/>
				</ShaderGradientCanvas>
				{children}
			</main>
		</div>
	);
}
