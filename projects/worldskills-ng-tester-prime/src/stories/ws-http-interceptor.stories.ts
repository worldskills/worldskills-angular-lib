import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, Input, OnChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';

/**
 * Simulates what wsHttpInterceptor would do to an outgoing request,
 * without actually making an HTTP call.
 */
function simulateIntercept(
  url: string,
  includeLanguageParam: boolean,
  encoderUriPatterns: string[],
  lang: string,
): { url: string; params: Record<string, string>; headers: Record<string, string> } {
  const params: Record<string, string> = {};
  const headers: Record<string, string> = {};

  if (includeLanguageParam) {
    params['l'] = lang;
    headers['Accept-Language'] = lang;
  }

  const rewrite = encoderUriPatterns.some(p => url.match(p));
  const queryString = Object.entries(params)
    .map(([k, v]) => `${rewrite ? encodeURIComponent(k) : k}=${rewrite ? encodeURIComponent(v) : v}`)
    .join('&');

  return {
    url: queryString ? `${url}?${queryString}` : url,
    params,
    headers,
  };
}

@Component({
  selector: 'story-interceptor-preview',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <div class="flex flex-col gap-4 font-mono text-sm max-w-2xl">

      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p class="text-xs font-sans font-semibold text-gray-500 uppercase tracking-wide mb-3">Outgoing request</p>
        <div class="flex flex-col gap-1">
          <div>
            <span class="text-purple-600 font-semibold">GET </span>
            <span class="text-blue-700 break-all">{{ result.url }}</span>
          </div>
          @if (result.headers['Accept-Language']) {
            <div class="text-gray-500">Accept-Language: <span class="text-green-700">{{ result.headers['Accept-Language'] }}</span></div>
          }
        </div>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p class="text-xs font-sans font-semibold text-gray-500 uppercase tracking-wide mb-3">Interceptor config</p>
        <pre class="text-xs text-gray-800 whitespace-pre-wrap">{{ config | json }}</pre>
      </div>

    </div>
  `,
})
class InterceptorPreviewComponent implements OnChanges {
  @Input() url = 'https://api.worldskills.org/events';
  @Input() includeLanguageParam = true;
  @Input() encoderUriPatterns = '/api/';
  @Input() lang = 'fr';

  result: ReturnType<typeof simulateIntercept> = { url: '', params: {}, headers: {} };
  config: object = {};

  ngOnChanges(): void {
    const patterns = this.encoderUriPatterns
      ? this.encoderUriPatterns.split(',').map(s => s.trim()).filter(Boolean)
      : [];

    this.config = {
      http: {
        includeLanguageParam: this.includeLanguageParam,
        encoderUriPatterns: patterns,
      },
    };

    this.result = simulateIntercept(this.url, this.includeLanguageParam, patterns, this.lang);
  }
}

const meta: Meta<InterceptorPreviewComponent> = {
  title: 'WorldSkills UI / HTTP Interceptor',
  component: InterceptorPreviewComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [InterceptorPreviewComponent] })],
  parameters: {
    docs: {
      description: {
        component: `
A functional HTTP interceptor that automatically appends language params and re-encodes
URL parameters for configured routes. Register it alongside \`provideWsNgUi()\`:

\`\`\`ts
// app.config.ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideWsNgUi, wsHttpInterceptor } from 'worldskills-ng-ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideWsNgUi({
      http: {
        includeLanguageParam: true,
        encoderUriPatterns: ['/api/'],
      },
    }),
    provideHttpClient(withInterceptors([wsHttpInterceptor])),
  ],
};
\`\`\`

**Language param** — reads \`sessionStorage.getItem('lang')\` (falls back to \`'en'\`),
appends \`?l=<lang>\` and \`Accept-Language: <lang>\` to every request.

**Encoder patterns** — regex strings matched against the request URL.
Matching requests have their query params re-encoded with \`encodeURIComponent\`,
correctly handling reserved characters like \`+\`.

> Auth header injection (Bearer token) is intentionally excluded — that belongs in \`worldskills-ng-auth\`.
        `,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<story-interceptor-preview
      [url]="url"
      [includeLanguageParam]="includeLanguageParam"
      [encoderUriPatterns]="encoderUriPatterns"
      [lang]="lang"
    ></story-interceptor-preview>`,
  }),
  argTypes: {
    url: { control: 'text', description: 'Simulated request URL' },
    includeLanguageParam: { control: 'boolean', description: 'http.includeLanguageParam' },
    encoderUriPatterns: { control: 'text', description: 'http.encoderUriPatterns (comma-separated)' },
    lang: {
      control: 'select',
      options: ['en', 'fr', 'de', 'ar_AE', 'zh_CN', 'pt_BR', 'ru_RU'],
      description: 'Simulated sessionStorage lang value',
    },
  },
};

export default meta;
type Story = StoryObj<InterceptorPreviewComponent>;

export const WithLanguageParam: Story = {
  name: 'With language param',
  args: {
    url: 'https://api.worldskills.org/events',
    includeLanguageParam: true,
    encoderUriPatterns: '',
    lang: 'fr',
  },
};

export const WithEncoder: Story = {
  name: 'With URL encoder',
  args: {
    url: 'https://api.worldskills.org/api/search',
    includeLanguageParam: true,
    encoderUriPatterns: '/api/',
    lang: 'en',
  },
};

export const Passthrough: Story = {
  name: 'No config (passthrough)',
  args: {
    url: 'https://api.worldskills.org/events',
    includeLanguageParam: false,
    encoderUriPatterns: '',
    lang: 'en',
  },
};
