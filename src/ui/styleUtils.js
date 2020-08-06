export function inputStyles(theme) {
    return `
        background: #fff;
        & .MuiOutlinedInput-root {
            & fieldset {
                border: 1px solid  ${theme.palette.grey[200]};
            }
            &:hover fieldset {
                border: 1px solid ${theme.palette.grey[300]};
            }
            &.Mui-focused fieldset {
                border: 1px solid ${theme.palette.green};
            }
        }   
  `;
}
