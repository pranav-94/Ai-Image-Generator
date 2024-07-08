declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_URL: string;
      REACT_APP_API_KEY: string;
      // Add other environment variables here
    }
  }
  
  // Ensures `process` is recognized in TypeScript files
  declare var process: {
    env: NodeJS.ProcessEnv;
  };
  