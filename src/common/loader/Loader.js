import React from 'react';
import loader from '../../images/Spinner-1s-200px.gif';

const styles = {
    paddingTop: '30px',
    paddingBottom: '30px',
    textAlign: 'center'
}

const Loader = () => {
  return (
    <div style={styles}>
        <img  src={loader} alt="loader" height={'80px'}/>
    </div>
  )
}

export default Loader
