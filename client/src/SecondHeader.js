import Background from './grayBackground.jpg';
import cLogo from './computerLogo.svg';

function SecondHeader() {
    return(
        <>
        <div className='subHeader rounded'>
        <img className='h-20 w-full bg-cover 'src={Background} alt=''></img>
        </div>

      <div className='bg-redditDark-brighter'>
        <div className='mx-6 relative flex'>
          <div className='h-20 w-20 bg-white rounded-full overflow-hidden relative -top-3 border-4 border-white'>
            <img src={cLogo} alt=''></img>
          </div>

          <div className='pt-3 pl-4'>
            <h1 className='text-gray-300 text-3xl'>Dev's full-stack projects: Devon's full-stack reddit recreation</h1>
            <h5 className='text-gray-400'>r/Dev'sRedditRecreation</h5>
          </div>

        </div>
      </div>
        </>
    );
}

export default SecondHeader