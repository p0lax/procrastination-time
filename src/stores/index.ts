import { RootStore } from './RootStore';
import { configure } from 'mobx';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const rootStore = new RootStore();

export { RootStore, rootStore };
