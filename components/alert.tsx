interface AlertProps {
  type: string;
  message: string;
}

export default function AlertMessage({ type, message }: AlertProps) {
  const getAlertStyles = () => {
    switch (type) {
      case "success":
        return "rounded p-2 bg-green-200 text-green-800";
      case "failure":
        return "rounded p-2 bg-red-200 text-red-800";
      case "duplicate":
        return "rounded p-2 bg-yellow-200 text-yellow-800";
      default:
        return "rounded p-2 bg-gray-200 text-gray-800";
    }
  };

  return <div className={getAlertStyles()}>{message}</div>;
}
