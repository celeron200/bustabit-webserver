define(["dispatcher/AppDispatcher","constants/AppConstants"],function(e,t){var n={runStrategy:function(){e.handleViewAction({actionType:t.ActionTypes.RUN_STRATEGY})},stopScript:function(){e.handleViewAction({actionType:t.ActionTypes.STOP_SCRIPT})},updateScript:function(n){e.handleViewAction({actionType:t.ActionTypes.UPDATE_SCRIPT,script:n})},selectStrategy:function(n){e.handleViewAction({actionType:t.ActionTypes.SELECT_STRATEGY,strategy:n})},setWidgetState:function(n,r){e.handleViewAction({actionType:t.ActionTypes.SET_WIDGET_STATE,property:n,state:r})}};return n});