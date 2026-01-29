import { useState } from 'react';
import { Button } from './components/foundation/Button';
import { Input } from './components/forms/Input';
import { Badge } from './components/foundation/Badge';
import { Checkbox } from './components/forms/Checkbox';
import { RadioGroup, RadioGroupItem } from './components/forms/Radio';
import { Switch } from './components/forms/Switch';
import { Textarea } from './components/forms/Textarea';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './components/layout/Card';
import {
  ComponentPalette,
  DropZone,
  CodePreview,
} from './components/playground';

interface DroppedComponent {
  id: string;
  uniqueId: string;
  name: string;
  code: string;
}

export function App() {
  // Playground state
  const [view, setView] = useState<'builder' | 'examples'>('builder');
  const [droppedComponents, setDroppedComponents] = useState<DroppedComponent[]>([]);

  // Form state
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [plan, setPlan] = useState('monthly');
  const [notifications, setNotifications] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', {
      ...formData,
      agreeToTerms,
      plan,
      notifications,
    });
    alert('Form submitted! Check console for data.');
  };

  const handleDrop = (component: DroppedComponent) => {
    setDroppedComponents((prev) => [...prev, component]);
  };

  const handleRemove = (uniqueId: string) => {
    setDroppedComponents((prev) => prev.filter((c) => c.uniqueId !== uniqueId));
  };

  const handleClear = () => {
    setDroppedComponents([]);
  };

  return (
    <div className="min-h-screen bg-bg-secondary p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-2">
            ClickMax Design System
          </h1>
          <p className="text-text-secondary mb-4">
            Interactive playground for all components
          </p>
          <div className="flex justify-center gap-2">
            <Button
              variant={view === 'builder' ? 'primary' : 'ghost'}
              onClick={() => setView('builder')}
            >
              Component Builder
            </Button>
            <Button
              variant={view === 'examples' ? 'primary' : 'ghost'}
              onClick={() => setView('examples')}
            >
              Examples
            </Button>
          </div>
        </div>

        {/* Component Builder */}
        {view === 'builder' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Component Palette */}
            <div className="lg:col-span-1">
              <ComponentPalette onDragStart={() => {}} />
            </div>

            {/* Middle: Drop Zone */}
            <div className="lg:col-span-1">
              <DropZone
                droppedComponents={droppedComponents}
                onDrop={handleDrop}
                onRemove={handleRemove}
                onClear={handleClear}
              />
            </div>

            {/* Right: Code Preview */}
            <div className="lg:col-span-1">
              <CodePreview droppedComponents={droppedComponents} />
            </div>
          </div>
        )}

        {/* Examples View */}
        {view === 'examples' && (
          <div className="mx-auto max-w-5xl space-y-8">{/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Interactive Examples
          </h2>
          <p className="text-text-secondary">
            See components in action with real state management
          </p>
        </div>

        {/* Interactive Form */}
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Interactive Form Demo</CardTitle>
              <CardDescription>
                Try all form components with live state
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Input Fields */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Text Inputs
                  </h3>
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    description="We'll never share your email."
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Textarea */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Textarea
                  </h3>
                  <Textarea
                    label="Message"
                    placeholder="Tell us what you think..."
                    description="Share your thoughts or feedback"
                    textareaSize="md"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Checkbox */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Checkbox
                  </h3>
                  <Checkbox
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => {
                      if (typeof checked === 'boolean') {
                        setAgreeToTerms(checked);
                      }
                    }}
                    label="I agree to terms and conditions"
                    description="You must agree before submitting"
                    id="terms"
                  />
                </div>

                {/* Radio Group */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Radio Group
                  </h3>
                  <RadioGroup value={plan} onValueChange={setPlan}>
                    <RadioGroupItem
                      value="monthly"
                      label="Monthly Plan"
                      description="R$ 29,90 per month. Cancel anytime."
                      id="monthly"
                    />
                    <RadioGroupItem
                      value="yearly"
                      label="Yearly Plan"
                      description="R$ 299,90 per year. Save 17%."
                      id="yearly"
                    />
                  </RadioGroup>
                </div>

                {/* Switch */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Switch
                  </h3>
                  <Switch
                    checked={notifications}
                    onCheckedChange={(checked) => setNotifications(checked)}
                    label="Email notifications"
                    description="Receive updates about your account"
                    id="notifications"
                  />
                </div>

                {/* Current State Display */}
                <div className="rounded-lg bg-bg-tertiary p-4 space-y-2">
                  <h4 className="font-semibold text-text-primary">
                    Current Form State:
                  </h4>
                  <pre className="text-xs text-text-secondary overflow-auto">
                    {JSON.stringify(
                      {
                        name: formData.name || '(empty)',
                        email: formData.email || '(empty)',
                        message: formData.message || '(empty)',
                        agreeToTerms,
                        plan,
                        notifications,
                      },
                      null,
                      2
                    )}
                  </pre>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="primary" type="submit" disabled={!agreeToTerms}>
                Submit Form
              </Button>
              <Button
                variant="ghost"
                type="button"
                onClick={() => {
                  setFormData({ name: '', email: '', message: '' });
                  setAgreeToTerms(false);
                  setPlan('monthly');
                  setNotifications(true);
                }}
              >
                Reset
              </Button>
            </CardFooter>
          </form>
        </Card>

        {/* Button Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              All button styles and sizes available
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" variant="outline">
                  🔍
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badge Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Badge Variants</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Form Component Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Component Sizes</CardTitle>
            <CardDescription>
              Checkbox, Radio, and Switch in different sizes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Checkbox Sizes */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3">
                  Checkbox Sizes
                </h4>
                <div className="space-y-2">
                  <Checkbox size="sm" label="Small (16px)" id="cb-sm" />
                  <Checkbox size="md" label="Medium (20px)" id="cb-md" />
                  <Checkbox size="lg" label="Large (24px)" id="cb-lg" />
                </div>
              </div>

              {/* Radio Sizes */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3">
                  Radio Sizes
                </h4>
                <RadioGroup defaultValue="r-sm">
                  <RadioGroupItem
                    value="r-sm"
                    label="Small (16px)"
                    id="r-sm"
                    size="sm"
                  />
                  <RadioGroupItem
                    value="r-md"
                    label="Medium (20px)"
                    id="r-md"
                    size="md"
                  />
                  <RadioGroupItem
                    value="r-lg"
                    label="Large (24px)"
                    id="r-lg"
                    size="lg"
                  />
                </RadioGroup>
              </div>

              {/* Switch Sizes */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3">
                  Switch Sizes
                </h4>
                <div className="space-y-2">
                  <Switch size="sm" label="Small (32x18px)" id="sw-sm" />
                  <Switch size="md" label="Medium (40x24px)" id="sw-md" />
                  <Switch size="lg" label="Large (48x28px)" id="sw-lg" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
          </div>
        )}
      </div>
    </div>
  );
}
