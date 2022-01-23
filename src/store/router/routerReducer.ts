import { routerStore } from './routerStore';
import { TRouterStore } from './TRouterStore';
import { TRouterSets } from './TRouterSets';

import { ACTIVE_MODAL_SET } from './sets/activeModal/setActiveModal';
import { actionSetActive } from './actions/activeModal/actionSetActive';
import { ACTIVE_MODAL_CLEAR } from './sets/activeModal/clearActiveModal';
import { actionClearActiveModal } from './actions/activeModal/actionClearActiveModal';
import { ACTIVE_PAGE_SET } from './sets/activePage/setActivePage';
import { actionSetActivePage } from './actions/actionSetActivePage';

export const routerReducer = (
  state = routerStore,
  action: TRouterSets,
): TRouterStore => {
  switch (action.type) {
    case ACTIVE_MODAL_SET:
      return actionSetActive(state, action.data);

    case ACTIVE_MODAL_CLEAR:
      return actionClearActiveModal(state);

    case ACTIVE_PAGE_SET:
      return actionSetActivePage(state, action.data);

    default:
      return state;
  }
}