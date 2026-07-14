

export interface SceneMetadata {
  sceneId: string;
  type: 'base' | 'wizard';
  options?: any;
}

export interface WizardStepMetadata {
  step: number;
}
