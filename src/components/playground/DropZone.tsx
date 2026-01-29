import { useState } from 'react';
import { Button } from '../foundation/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../layout/Card';
import { componentPreviewRegistry } from './componentRegistry';

interface DroppedComponent {
  id: string;
  uniqueId: string;
  name: string;
  code: string;
}

interface DropZoneProps {
  droppedComponents: DroppedComponent[];
  onDrop: (component: DroppedComponent) => void;
  onRemove: (uniqueId: string) => void;
  onClear: () => void;
}

export function DropZone({ droppedComponents, onDrop, onRemove, onClear }: DropZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    try {
      const data = e.dataTransfer.getData('component');
      const item = JSON.parse(data);

      const droppedComponent: DroppedComponent = {
        ...item,
        uniqueId: `${item.id}-${Date.now()}`,
      };

      onDrop(droppedComponent);
    } catch (error) {
      console.error('Error parsing dropped component:', error);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Canvas</CardTitle>
          {droppedComponents.length > 0 && (
            <Button
              size="sm"
              variant="ghost"
              onClick={onClear}
            >
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`min-h-150 p-6 rounded-lg border-2 border-dashed transition-colors ${
            isDragOver
              ? 'border-interactive-primary-default bg-bg-tertiary'
              : 'border-border-default bg-bg-secondary'
          }`}
        >
          {droppedComponents.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-text-secondary text-lg mb-2">
                  Drag components here
                </p>
                <p className="text-text-tertiary text-sm">
                  Drop components from the palette to build your UI
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {droppedComponents.map((item) => {
                const PreviewComponent = componentPreviewRegistry[item.id];
                return (
                  <div
                    key={item.uniqueId}
                    className="group relative flex items-center gap-4 p-4 rounded-lg border-2 border-border-default bg-bg-primary hover:border-interactive-primary-default transition-colors"
                  >
                    <div className="shrink-0">
                      {PreviewComponent && <PreviewComponent />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">
                        {item.name}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onRemove(item.uniqueId)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Remove
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
