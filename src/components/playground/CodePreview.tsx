import { useState } from 'react';
import { Button } from '../foundation/Button';
import { Badge } from '../foundation/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '../layout/Card';

interface DroppedComponent {
  id: string;
  uniqueId: string;
  name: string;
  code: string;
}

interface CodePreviewProps {
  droppedComponents: DroppedComponent[];
}

export function CodePreview({ droppedComponents }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);
  const [showImports, setShowImports] = useState(true);

  // Generate imports based on dropped components
  const generateImports = () => {
    const imports = new Set<string>();

    droppedComponents.forEach((item) => {
      if (item.id.startsWith('button-')) {
        imports.add("import { Button } from '@clickmax/design-system';");
      } else if (item.id.startsWith('badge-')) {
        imports.add("import { Badge } from '@clickmax/design-system';");
      } else if (item.id.startsWith('input-')) {
        imports.add("import { Input } from '@clickmax/design-system';");
      } else if (item.id.startsWith('checkbox-')) {
        imports.add("import { Checkbox } from '@clickmax/design-system';");
      } else if (item.id.startsWith('switch-')) {
        imports.add("import { Switch } from '@clickmax/design-system';");
      } else if (item.id.startsWith('textarea-')) {
        imports.add("import { Textarea } from '@clickmax/design-system';");
      } else if (item.id.startsWith('radio-')) {
        imports.add("import { RadioGroup, RadioGroupItem } from '@clickmax/design-system';");
      }
    });

    return Array.from(imports).sort().join('\n');
  };

  // Generate JSX code
  const generateJSX = () => {
    if (droppedComponents.length === 0) {
      return '  {/* Drop components to see code here */}';
    }

    return droppedComponents.map((item) => `  ${item.code}`).join('\n\n');
  };

  const generateFullCode = () => {
    const imports = generateImports();
    const jsx = generateJSX();

    return `${showImports ? imports + '\n\n' : ''}export function MyComponent() {
  return (
    <div className="space-y-4">
${jsx}
    </div>
  );
}`;
  };

  const fullCode = generateFullCode();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle>Code Preview</CardTitle>
            <Badge variant="secondary">
              {droppedComponents.length} {droppedComponents.length === 1 ? 'component' : 'components'}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowImports(!showImports)}
            >
              {showImports ? 'Hide' : 'Show'} Imports
            </Button>
            <Button
              size="sm"
              variant={copied ? 'secondary' : 'primary'}
              onClick={handleCopy}
              disabled={droppedComponents.length === 0}
            >
              {copied ? 'Copied!' : 'Copy Code'}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <pre className="max-h-150 overflow-auto p-4 rounded-lg bg-bg-tertiary border-2 border-border-default">
            <code className="text-sm text-text-primary font-mono">
              {fullCode}
            </code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
