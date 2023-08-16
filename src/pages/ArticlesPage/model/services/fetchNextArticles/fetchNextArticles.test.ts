import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchNextArticles} from "./fetchNextArticles";
import {ArticleView} from "entities/Article";
import {fetchArticles} from "../fetchArticles/fetchArticles";


jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticles.test', () => {
    test('success fetching', async () => {

        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPage: {
                page: 2,
                ids: [],
                hasMore: true,
                isLoading: false,
                view: ArticleView.BIG,
                error: '',
                entities: {},
                limit: 5

            }
        });
        const result = await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticles).toHaveBeenCalledWith({page: 3})

    });

    test('fetchArticles not called', async () => {

        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPage: {
                page: 2,
                ids: [],
                hasMore: false,
                isLoading: false,
                view: ArticleView.BIG,
                error: '',
                entities: {},
                limit: 5

            }
        });
        const result = await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticles).not.toHaveBeenCalled()

    });

})