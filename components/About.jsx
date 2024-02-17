
const AboutPage = () => {
  return (
 <>
      <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Team EXE!</h1>
      <p style={styles.paragraph}>Hey there, fellow internet explorer! We're Team EXE, and we're here to rock your digital world.</p>
      <p style={styles.paragraph}>Our website is more than just pixels on a screen – it's a labor of love crafted by a team of passionate tech enthusiasts. We're dedicated to bringing you the coolest, most innovative solutions and the juiciest content around.</p>
      <p style={styles.paragraph}>So, what's our mission? Simple: to make your online experience as awesome as possible. Whether you're here for a dose of inspiration, a tech fix, or just some good old-fashioned fun, we've got you covered.</p>
      <p style={styles.paragraph}>Thanks for dropping by! Stay tuned for all the latest updates, and remember – the internet is our playground, so let's have some fun!</p>
      <footer style={styles.footer}>
        <p>This site was made with ❤️ by Team EXE &copy; 2024</p>
      </footer>
    </div>
 </>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    backgroundColor: '#f5f5f5',
    height: '95%',
    width:'100%',
    color: '#333',
    borderRadius: '30px',
    overflow:'scroll'
  },
  heading: {
    textAlign: 'center',
    color: '#00327d',
  },
  paragraph: {
    marginBottom: '20px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '50px',
    paddingTop: '20px',
    borderTop: '1px solid #ccc',
  }
};

export default AboutPage;
