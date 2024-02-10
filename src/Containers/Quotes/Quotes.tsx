import { useCallback, useEffect, useState } from "react"
import { ApiQuotes, Quote } from "../../types"
import axiosApi from "../../axiosApi";
import { Link } from "react-router-dom";

const Quotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    const fetchQuotes = useCallback(async () => {
        try {
            const response = await axiosApi.get<ApiQuotes | null>('/quotes.json');
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
    }, []);

    useEffect(() => { 
        void fetchQuotes();
    }, [fetchQuotes]);

    return (
        <div className="mt-3 d-flex flex-column gap-3">
            {quotes.map(quote => (
                <div key={quote.id} className="card">
                    <div className="card-body">
                        <h6>- {quote.author}</h6>
                        <p>"{quote.text}"</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Quotes;