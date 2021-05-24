import LoginImg from './../../assets/img-login.jpg'

const styles = {
  logoPageBackground: {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 100%), ' +
      'linear-gradient(0deg, rgba(25, 25, 25, 0.4), rgba(25, 25, 25, 0.4)), ' +
      `url(${LoginImg})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  'mb-2': {
    marginBottom: '16px'
  }
}

export default styles