import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        // Add reducers here
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            // Add other middleware on this array
        ),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };