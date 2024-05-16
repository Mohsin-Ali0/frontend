import { useEffect } from 'react';

const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0)
    }, [title]);
}

export default usePageTitle;