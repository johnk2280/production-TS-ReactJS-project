import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';
import { profileReducer } from 'features/EditableProfileCard';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
    // eslint-disable-next-line react/display-name
) => (StoryComponent: Story) => (
    <StoreProvider initialState={ state } asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } }>
        <StoryComponent />
    </StoreProvider>
);
