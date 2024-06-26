import propTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    console.log(bookmark)
    
    const {title} = bookmark;
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-xl'>
            <h3 className='text-3xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : propTypes.object
}
export default Bookmark;