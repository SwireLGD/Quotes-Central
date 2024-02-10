import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";

const NewQuote = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [quote, setQuote] = useState({category: '', author: '', text: ''});

    useEffect(() => {
        const fetchQuote = async () => {
            if (params.id) {
                try {
                    const response = await axiosApi.get('/quotes/' + params.id + '.json');
                    setQuote({ category: response.data.category, author: response.data.author, text: response.data.text })
                } catch (error) {
                    console.error('Failed to fetch data', error);
                }
            }
        }

        fetchQuote();
    }, [params.id]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setQuote(prev => ({...prev, [name]: value}));
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
          if (params.id) {
            await axiosApi.put('/quotes/' + params.id + '.json', quote);
          } else {
            await axiosApi.post('/quotes.json', quote);
          }
          navigate('/');
        } catch (error) {
          console.error("Failed to submit post", error);
        }
    }, [params.id, quote, navigate]);

    return (
        <div className="d-flex flex-column align-items-center text-center w-100 mt-5">
            <h1>{params.id ? 'Edit Quote' : 'New Quote'}</h1>
            <form onSubmit={handleSubmit} className="w-75">
            <div>
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        className="form-select w-100 mb-3"
                        id="category"
                        name="category"
                        value={quote.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Choose a category</option>
                        <option value="star-wars">Star Wars</option>
                        <option value="famous-people">Famous people</option>
                        <option value="saying">Saying</option>
                        <option value="humour">Humour</option>
                        <option value="motivational">Motivational</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        className="input-group-text w-100 mb-3"
                        id="author"
                        name="author"
                        type="text"
                        value={quote.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="quote" className="form-label">Quote text</label>
                    <textarea
                        className="input-group-text w-100 mb-2"
                        style={{ minHeight: '500px' }}
                        id="quote"
                        name="text"
                        value={quote.text}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{params.id ? 'Edit' : 'Create'}</button>
            </form>
        </div>
    );

};

export default NewQuote;