import React from 'react'
import { Jumbotron, Button } from 'reactstrap'


class JumbotronHeader extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="container" align='left'>
                        <h1 className='display-3'>FaceQuery App</h1>
                        <p className='lead'>This is an FaceQuery App</p>
                        <hr className='my-2' />
                        <br/>
                        <p className='lead'>
                            <Button color='primary'>Explore more</Button>
                        </p>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default JumbotronHeader