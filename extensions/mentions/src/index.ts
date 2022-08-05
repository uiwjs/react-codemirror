import { Extension } from '@codemirror/state';
import { CompletionContext, autocompletion, Completion } from '@codemirror/autocomplete';

export function mentions(data: Completion[] = []): Extension {
  return autocompletion({
    override: [
      (context: CompletionContext) => {
        let word = context.matchBefore(/@(\w+)?/);
        if (!word) return null;
        if (word && word.from == word.to && !context.explicit) {
          return null;
        }
        return {
          from: word?.from!,
          options: [...data],
        };
      },
    ],
  });
}

export const mentionsView: Extension = [mentions()];
