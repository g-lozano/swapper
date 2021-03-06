
// import ClickHandler from '../controllers/clickHandler.server';
import serverRender from '../serverRender.js';
import BookFunctions from '../controllers/bookFunctions.server'
import TraderFunctions from '../controllers/traderFunctions.server'

const bookFuncs = new BookFunctions;
const traderFuncs = new TraderFunctions;

export default function (app, passport) {
  // function isLoggedIn(req, res, next) {
  //   if (req.isAuthenticated()) {
  //     return next();
  //   }
  //   return res.json({ status: 'forbidden' });
  // }

  // const clickHandler = new ClickHandler();

  // app.route('/api/user')
  //   .get((req, res) => {
  //     if (req.user && req.user.twitter) {
  //       return res.json(req.user.twitter);
  //     }
  //     return res.json({ unauth: true });
  //   });

  // app.route('/auth/twitter')
		// .get(passport.authenticate('twitter'));

  // app.route('/auth/twitter/callback')
  //   .get(passport.authenticate('twitter', {
  //     successRedirect: '/',
  //     // failureRedirect: '/login',
  //     failureRedirect: '/main',
  //   }));
  
  app.route('/login')
    .post(traderFuncs.login)
  
  app.route('/signup')
    .post(traderFuncs.signup)

  app.route('/logout')
    .post((req, res) => {
      req.session.destroy();
      res.json({msg: 'logged out'})
    });
  
  app.route('/update')
    .post(traderFuncs.updateInfo)
    
  app.route('/mybooks')
    .post(bookFuncs.getMyBooks)
  
  app.route('/allbooks')
    .post(bookFuncs.getAllBooks)
  
  app.route('/addbook')
    .post(bookFuncs.addBook)
  
  app.route('/removebook')
    .post(bookFuncs.removeBook)
    
  app.route('/updatebook')
    .post(bookFuncs.updateBook)
  
  app.route('/acceptrequest')
    .post(bookFuncs.acceptRequest)
    
  app.route('/rejectrequest')
    .post(bookFuncs.rejectRequest)
  
  app.route('/cancelrequest')
    .post(bookFuncs.cancelRequest)

  // app.route('/api/user/clicks')
		// .get(isLoggedIn, clickHandler.getClicks)
		// .post(isLoggedIn, clickHandler.addClick)
		// .delete(isLoggedIn, clickHandler.resetClicks);

  app.route('/*')
    .get(serverRender
      // (req, res) => {
      // res.sendFile(`${path}/public/index.html`);
      // }
    );
}
