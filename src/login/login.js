import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './login.css';
export default function Login() {
   const handleLogin = function(e){
    e.preventDefault();
    console.log("login")
    }
    return (
        <Grid container className="h-100"  direction="row" >
            <Grid item xs={6} className="bg-img" >
                <Grid container className="bg-mask" justifyContent="center" alignItems="center">
                    <div className="promo-box"> 
                        <h1 className="title"> Estimation Tool </h1> 
                        <p className="sub-title">The Scalable Path Project estimator. A tool that's flexible enough to help you estimate costs.</p>
                    </div>
                </Grid>
               
            </Grid>
            <Grid container direction="column" xs={6}  justifyContent="center" alignItems="center" >
                          
                                <h1 className="login-title"> Login</h1>
                                <form onSubmit={handleLogin}>
                                        <FormControl>
                                            <TextField placeholder="Email" width="100%"  mb={3} id="email"  size="small" variant="outlined" />
                                        </FormControl>
                                        <FormControl>
                                        <TextField id="pass" type="password" placeholder="password" size="small" variant="outlined" />
                                        </FormControl>
                                        <Button variant="contained" color="primary"  type="submit"> ssssss</Button>
                                </form>
            </Grid>
        </Grid>
    )
}
