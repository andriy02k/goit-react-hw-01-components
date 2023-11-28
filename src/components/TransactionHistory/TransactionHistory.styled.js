import styled from "styled-components";

export const TransactionTable = styled.table(() => {
    return {
        margin: '20px auto',
        padding: '0px',
        width: '360px',
        backgroundColor: '#CCCCCC',
        border: '1px solid #ccc',
        overflow: 'hidden',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '1.2',
        letterSpacing: '0.02em',
        color: '#2E2F42',
        thead: {
            backgroundColor: "aqua",
            tr: {
                th: {
                    padding: '8px',
                },
            },
        },
        tbody: {
            textAlign: 'center',
            textTransform: 'capitalize',
            tr: {
                td: {
                    padding: '8px',
                },
            },
        },
    };
});