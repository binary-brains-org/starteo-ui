const errorHandler = (e: Error): string => {
  switch (e.message) {
    case 'Network Error':
      return 'Connexion is unavailable';

    default:
      return e.message;
  }
};

export default errorHandler;
