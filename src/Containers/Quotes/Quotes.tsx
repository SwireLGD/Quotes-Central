import { useCallback, useEffect, useState } from "react"
import { ApiQuotes, Quote } from "../../types"
import axiosApi from "../../axiosApi";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

const Quotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { category } = useParams();

    const fetchQuotes = useCallback(async () => {
        setIsLoading(true);
        try {
            let url = '/quotes.json';
            if (category && category !== 'all') {
                url += `?orderBy="category"&equalTo="${category}"`;
            }
            const response = await axiosApi.get<ApiQuotes | null>(url);
            const quotes = response.data;

            if (quotes) {
                setQuotes(Object.keys(quotes).map(id => ({
                    ...quotes[id],
                    id
                })));
            } else {
                setQuotes([]);
            }
        } catch (error) {
            console.error('An error occurred while fetching the quotes', error); 
        }
        setIsLoading(false);
    }, [category]);

    useEffect(() => { 
        void fetchQuotes();
    }, [fetchQuotes]);

    const handleDelete = useCallback(async (id: string) => {
        try {
            await axiosApi.delete(`/quotes/${id}.json`);
            await fetchQuotes();
        } catch (error) {
            console.error('Failed to delete the quote', error);
        }
    }, [fetchQuotes]);

    if (isLoading) {
        return <Loader />
    }

    if (quotes.length === 0) {
        return <div className="mt-3">Quotes not found</div>;
    }

    return (
        <div className="mt-3 d-flex flex-column gap-3">
            {quotes.map(quote => (
                <div key={quote.id} className="card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <h6>— {quote.author}</h6>
                            <p>"{quote.text}"</p>
                        </div>
                        <div>
                            <Link to={`/quotes/${quote.id}/edit`} className="btn btn-success me-3">Edit</Link>
                            <button className="btn btn-danger" onClick={() => handleDelete(quote.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Quotes;