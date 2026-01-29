import { Button } from '../foundation/Button';
import { Badge } from '../foundation/Badge';
import { Input } from '../forms/Input';
import { Checkbox } from '../forms/Checkbox';
import { RadioGroup, RadioGroupItem } from '../forms/Radio';
import { Switch } from '../forms/Switch';
import { Textarea } from '../forms/Textarea';

// Registry of preview functions by component ID
export const componentPreviewRegistry: Record<string, () => React.ReactElement> = {
  // Buttons
  'button-primary': () => <Button variant="primary">Primary</Button>,
  'button-secondary': () => <Button variant="secondary">Secondary</Button>,
  'button-outline': () => <Button variant="outline">Outline</Button>,
  'button-ghost': () => <Button variant="ghost">Ghost</Button>,
  'button-destructive': () => <Button variant="destructive">Destructive</Button>,

  // Badges
  'badge-default': () => <Badge>Default</Badge>,
  'badge-success': () => <Badge variant="success">Success</Badge>,
  'badge-warning': () => <Badge variant="warning">Warning</Badge>,
  'badge-error': () => <Badge variant="error">Error</Badge>,

  // Forms
  'input-default': () => <Input placeholder="Enter text..." />,
  'input-with-label': () => <Input label="Email" placeholder="your@email.com" />,
  'checkbox-default': () => <Checkbox label="Accept terms" id="cb-palette" />,
  'switch-default': () => <Switch label="Notifications" id="sw-palette" />,
  'textarea-default': () => <Textarea placeholder="Enter message..." />,
  'radio-group': () => (
    <RadioGroup defaultValue="opt-1">
      <RadioGroupItem value="opt-1" label="Option 1" id="radio-palette-1" />
      <RadioGroupItem value="opt-2" label="Option 2" id="radio-palette-2" />
    </RadioGroup>
  ),
};

export function getComponentPreview(id: string): (() => React.ReactElement) | undefined {
  return componentPreviewRegistry[id];
}
