
import { create } from 'zustand';

interface SceneStore {
  currentSection: number;
  isLoading: boolean;
  cameraPosition: [number, number, number];
  cubeRotation: [number, number, number];
  showDownloadModal: boolean;
  animationState: 'idle' | 'rotating' | 'pulsing' | 'ripple';
  
  setCurrentSection: (section: number) => void;
  setIsLoading: (loading: boolean) => void;
  setCameraPosition: (position: [number, number, number]) => void;
  setCubeRotation: (rotation: [number, number, number]) => void;
  setShowDownloadModal: (show: boolean) => void;
  setAnimationState: (state: 'idle' | 'rotating' | 'pulsing' | 'ripple') => void;
}

export const useSceneStore = create<SceneStore>((set) => ({
  currentSection: 0,
  isLoading: true,
  cameraPosition: [0, 2, 6],
  cubeRotation: [0, 0, 0],
  showDownloadModal: false,
  animationState: 'idle',
  
  setCurrentSection: (section) => set({ currentSection: section }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setCameraPosition: (position) => set({ cameraPosition: position }),
  setCubeRotation: (rotation) => set({ cubeRotation: rotation }),
  setShowDownloadModal: (show) => set({ showDownloadModal: show }),
  setAnimationState: (state) => set({ animationState: state }),
}));
