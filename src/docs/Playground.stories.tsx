import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../components/primitives/Button';
import { Input } from '../components/primitives/Input';
import { Badge } from '../components/primitives/Badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/layout/Card';
import {
  Plus,
  Trash2,
  Check,
  Mail,
  User,
  Settings,
  Search,
} from 'lucide-react';

const meta: Meta = {
  title: 'Playground/Interactive',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Playground interativo para compor componentes e criar interfaces complexas. Use os controles para experimentar diferentes combinações de componentes do Design System.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Component Library Reference
const ComponentLibrary = () => (
  <Card className="w-full max-w-4xl mx-auto mb-8">
    <CardHeader>
      <CardTitle>Biblioteca de Componentes Disponíveis</CardTitle>
      <CardDescription>
        Componentes que você pode usar para criar suas interfaces
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-2">
          Primitives
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Button</Badge>
          <Badge variant="outline">Input</Badge>
          <Badge variant="outline">Badge</Badge>
          <Badge variant="outline">Icon</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-2">
          Layout
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Card</Badge>
          <Badge variant="outline">CardHeader</Badge>
          <Badge variant="outline">CardTitle</Badge>
          <Badge variant="outline">CardContent</Badge>
          <Badge variant="outline">CardFooter</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-2">Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">1000+ ícones do Lucide</Badge>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Interactive Todo List Builder
export const TodoListBuilder: Story = {
  render: () => {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Criar componente', completed: false },
      { id: 2, text: 'Adicionar testes', completed: true },
    ]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
      if (inputValue.trim()) {
        setTodos([
          ...todos,
          { id: Date.now(), text: inputValue, completed: false },
        ]);
        setInputValue('');
      }
    };

    const toggleTodo = (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    const removeTodo = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
      <div className="space-y-8 p-6">
        <ComponentLibrary />

        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Lista de Tarefas</CardTitle>
            <CardDescription>
              Exemplo interativo usando Button, Input, Badge e Card
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Nova tarefa..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                />
                <Button variant="primary" onClick={addTodo}>
                  <Plus className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-2">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border-default"
                  >
                    <Button
                      variant={todo.completed ? 'primary' : 'outline'}
                      size="icon"
                      onClick={() => toggleTodo(todo.id)}
                      className="h-8 w-8"
                    >
                      {todo.completed && <Check className="h-4 w-4" />}
                    </Button>
                    <span
                      className={`flex-1 text-sm ${
                        todo.completed
                          ? 'line-through text-text-secondary'
                          : 'text-text-primary'
                      }`}
                    >
                      {todo.text}
                    </span>
                    {todo.completed && (
                      <Badge variant="success">Concluído</Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTodo(todo.id)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border-default">
                <span className="text-sm text-text-secondary">
                  {todos.filter((t) => !t.completed).length} pendentes
                </span>
                <span className="text-sm text-text-secondary">
                  {todos.filter((t) => t.completed).length} concluídas
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Interactive Form Builder
export const FormBuilder: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    };

    return (
      <div className="space-y-8 p-6">
        <ComponentLibrary />

        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Formulário de Contato</CardTitle>
            <CardDescription>
              Exemplo usando Input, Button e validação de estados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-text-primary mb-1 block">
                  Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                  <Input
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-text-primary mb-1 block">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Input
                  label="Mensagem"
                  placeholder="Digite sua mensagem..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button
              variant="primary"
              className="flex-1"
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email || !formData.message}
            >
              {submitted ? (
                <>
                  <Check className="h-5 w-5" />
                  Enviado!
                </>
              ) : (
                'Enviar'
              )}
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                setFormData({ name: '', email: '', message: '' })
              }
            >
              Limpar
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  },
};

// Interactive Search with Results
export const SearchInterface: Story = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState<
      'all' | 'active' | 'completed'
    >('all');

    const items = [
      { id: 1, name: 'React Components', status: 'active', category: 'Dev' },
      { id: 2, name: 'TypeScript Guide', status: 'completed', category: 'Dev' },
      { id: 3, name: 'Design Tokens', status: 'active', category: 'Design' },
      {
        id: 4,
        name: 'Storybook Setup',
        status: 'completed',
        category: 'Dev',
      },
      { id: 5, name: 'Icon Library', status: 'active', category: 'Design' },
    ];

    const filteredItems = items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        selectedFilter === 'all' || item.status === selectedFilter;
      return matchesSearch && matchesFilter;
    });

    return (
      <div className="space-y-8 p-6">
        <ComponentLibrary />

        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Interface de Busca</CardTitle>
            <CardDescription>
              Exemplo com Input de busca, filtros com Button e resultados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                <Input
                  placeholder="Buscar itens..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant={selectedFilter === 'all' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter('all')}
                >
                  Todos
                </Button>
                <Button
                  variant={selectedFilter === 'active' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter('active')}
                >
                  Ativos
                </Button>
                <Button
                  variant={
                    selectedFilter === 'completed' ? 'primary' : 'outline'
                  }
                  size="sm"
                  onClick={() => setSelectedFilter('completed')}
                >
                  Concluídos
                </Button>
              </div>

              <div className="space-y-2 pt-2">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border-default hover:bg-bg-secondary transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Settings className="h-5 w-5 text-text-secondary" />
                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            {item.name}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {item.category}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          item.status === 'completed' ? 'success' : 'default'
                        }
                      >
                        {item.status === 'completed' ? (
                          <>
                            <Check className="h-3 w-3" />
                            Concluído
                          </>
                        ) : (
                          'Ativo'
                        )}
                      </Badge>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-text-secondary">
                    <Search className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Nenhum resultado encontrado</p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border-default text-sm text-text-secondary">
                <span>{filteredItems.length} resultados</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Code Examples
export const CodeExamples: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Exemplos de Código</CardTitle>
          <CardDescription>
            Copie e cole esses exemplos no seu projeto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-2">
              Card com Formulário
            </h3>
            <pre className="bg-bg-secondary p-4 rounded-lg overflow-x-auto">
              <code className="text-xs font-mono text-text-primary">
                {`import { Button, Input, Card, CardHeader, CardTitle, CardContent, CardFooter } from '@clickmax/design-system';

function LoginForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input label="Email" type="email" placeholder="seu@email.com" />
          <Input label="Senha" type="password" placeholder="••••••••" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">Entrar</Button>
      </CardFooter>
    </Card>
  );
}`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-2">
              Lista com Badges
            </h3>
            <pre className="bg-bg-secondary p-4 rounded-lg overflow-x-auto">
              <code className="text-xs font-mono text-text-primary">
                {`import { Badge, Card } from '@clickmax/design-system';
import { Check, Clock, X } from 'lucide-react';

function StatusList() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <span>Pedido #1234</span>
        <Badge variant="success">
          <Check className="h-3 w-3" />
          Entregue
        </Badge>
      </div>
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <span>Pedido #1235</span>
        <Badge variant="warning">
          <Clock className="h-3 w-3" />
          Em trânsito
        </Badge>
      </div>
    </div>
  );
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Sandbox Online</CardTitle>
          <CardDescription>
            Experimente no CodeSandbox ou StackBlitz
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-text-secondary">
            Abra um ambiente completo de desenvolvimento para testar os
            componentes:
          </p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  'https://codesandbox.io/s/new?template=react-ts',
                  '_blank'
                )
              }
            >
              Abrir no CodeSandbox
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open('https://stackblitz.com/fork/react-ts', '_blank')
              }
            >
              Abrir no StackBlitz
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};
