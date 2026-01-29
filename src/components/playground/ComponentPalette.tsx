import { useState } from 'react';
import { Button } from '../foundation/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../layout/Card';
import { componentPreviewRegistry } from './componentRegistry';

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  code: string;
}

const COMPONENT_LIBRARY: ComponentItem[] = [
  // Buttons
  {
    id: 'button-primary',
    name: 'Button Primary',
    category: 'Buttons',
    code: `<Button variant="primary">Primary</Button>`,
  },
  {
    id: 'button-secondary',
    name: 'Button Secondary',
    category: 'Buttons',
    code: `<Button variant="secondary">Secondary</Button>`,
  },
  {
    id: 'button-outline',
    name: 'Button Outline',
    category: 'Buttons',
    code: `<Button variant="outline">Outline</Button>`,
  },
  {
    id: 'button-ghost',
    name: 'Button Ghost',
    category: 'Buttons',
    code: `<Button variant="ghost">Ghost</Button>`,
  },
  {
    id: 'button-destructive',
    name: 'Button Destructive',
    category: 'Buttons',
    code: `<Button variant="destructive">Destructive</Button>`,
  },

  // Badges
  {
    id: 'badge-default',
    name: 'Badge Default',
    category: 'Badges',
    code: `<Badge>Default</Badge>`,
  },
  {
    id: 'badge-success',
    name: 'Badge Success',
    category: 'Badges',
    code: `<Badge variant="success">Success</Badge>`,
  },
  {
    id: 'badge-warning',
    name: 'Badge Warning',
    category: 'Badges',
    code: `<Badge variant="warning">Warning</Badge>`,
  },
  {
    id: 'badge-error',
    name: 'Badge Error',
    category: 'Badges',
    code: `<Badge variant="error">Error</Badge>`,
  },

  // Form Controls
  {
    id: 'input-default',
    name: 'Input',
    category: 'Forms',
    code: `<Input placeholder="Enter text..." />`,
  },
  {
    id: 'input-with-label',
    name: 'Input with Label',
    category: 'Forms',
    code: `<Input label="Email" placeholder="your@email.com" />`,
  },
  {
    id: 'checkbox-default',
    name: 'Checkbox',
    category: 'Forms',
    code: `<Checkbox label="Accept terms" />`,
  },
  {
    id: 'switch-default',
    name: 'Switch',
    category: 'Forms',
    code: `<Switch label="Notifications" />`,
  },
  {
    id: 'textarea-default',
    name: 'Textarea',
    category: 'Forms',
    code: `<Textarea placeholder="Enter message..." />`,
  },
  {
    id: 'radio-group',
    name: 'Radio Group',
    category: 'Forms',
    code: `<RadioGroup defaultValue="opt-1">
  <RadioGroupItem value="opt-1" label="Option 1" />
  <RadioGroupItem value="opt-2" label="Option 2" />
</RadioGroup>`,
  },
];

interface ComponentPaletteProps {
  onDragStart: (item: ComponentItem) => void;
}

export function ComponentPalette({ onDragStart }: ComponentPaletteProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(COMPONENT_LIBRARY.map(item => item.category))];

  const filteredComponents = selectedCategory === 'All'
    ? COMPONENT_LIBRARY
    : COMPONENT_LIBRARY.filter(item => item.category === selectedCategory);

  const handleDragStart = (e: React.DragEvent, item: ComponentItem) => {
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('component', JSON.stringify(item));
    onDragStart(item);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Component Palette</CardTitle>
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map(category => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 max-h-150 overflow-y-auto">
          {filteredComponents.map(item => {
            const PreviewComponent = componentPreviewRegistry[item.id];
            return (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                className="flex items-center gap-3 p-3 rounded-lg border-2 border-border-default bg-bg-primary hover:border-interactive-primary-default cursor-move transition-colors"
              >
                <div className="shrink-0">
                  {PreviewComponent && <PreviewComponent />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {item.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
