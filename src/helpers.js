export const getfilteredUsers = (users, filter) => {
    return users.filter(user => {
        const isFollowing = localStorage.getItem(`following-${user.id}`) === 'true';
        switch (filter) {
            case 'follow':
                return !isFollowing;
            case 'following':
                return isFollowing;
            default:
                return true;
        }
    });
};

export const formattingNumber = (number) => {
    return number.toLocaleString('en-US', { useGrouping: true });
};