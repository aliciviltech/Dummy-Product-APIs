interface SpacerProps {
  height?: string;  
}

export default function Spacer({
  height = "h-24",  
}: SpacerProps) {
  return (
    <div className={`w-full ${height}`}></div>
  );
}