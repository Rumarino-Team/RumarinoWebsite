import { Construction } from 'lucide-react';

export default function ProteusPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Construction className="w-24 h-24 mb-4 text-yellow-500" />
      <h1 className="text-4xl font-bold mb-2">Under Construction</h1>
      <p className="text-lg text-muted-foreground">The Proteus page is currently being built. Please check back later!</p>
    </div>
  );
}
