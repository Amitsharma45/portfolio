export const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();

        const options: Intl.DateTimeFormatOptions = {
            month: 'short',
            day: 'numeric',
        };

        if (date.getFullYear() !== now.getFullYear()) {
            options.year = 'numeric';
        }

        return new Intl.DateTimeFormat('en-US', options).format(date);
    };