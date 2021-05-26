const styles = {
  card: {
    background: '#FFFFFF',
    border: '0.5px solid rgba(180, 194, 211, 0.2)',
    boxSizing: 'border-box',
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.08)',
    borderRadius: '10px',
    width: '120px',
    height: '100px',
    '& span': {
      textTransform: 'capitalize',
      fontSize: '14px',
      marginTop: '13px'
    },
    '&:hover': {
      border: '0.5px solid rgba(180, 194, 211, 0.5)',
      boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.24)',
      transition: '0.2s'
    }
  }
}

export default styles