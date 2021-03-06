import React from 'react'
import { Row, Col } from '../../components/Grid'

export default function About() {
    return (
        <Row>
            <Col size={'md-6'} classes={'offset-3'}>

                <div className={'flex-container about-flex about p-5'}>
                    <div className={"jumbotron border-primary pt-4"}>
                    <div className={"card-header jumb-header text-center"}>Sapling Zone Clock Utility</div>
                    <div className={"card-body"}>
                        <h3 className={"card-title"}>About this application</h3>
                        <hr/>
                        <p className={"card-text"}>Sapling is an engineering firm in the Philadelphia suburbs that designs and manufactures clocks and synchronized, clock systems.  One of the items we offer are zone clocks.  And in Sapling production, these zone clocks should be pre-configured for whichever cities the customer chooses to use. The Zone Clock Setup Utility makes this process painless and straight forward by providing all the needed offset, bias and daylight saving information needed to program the Sapling clocks specifically.   Additionally, it'll provided other reginal information such as the city's location, displayed on a world map as well as its current, local time displayed on both an analog and digital clock.  With your browser's local memory storage, the user's search history is maintained to easily repeat common searches with a single click. The history list will also show the local times for these cities without the need to submit new searches.  This way the list can also be used to confirm all clocks are setup correctly when finishing up.  </p>
                        <em><p><b>Note:</b> Raw GMT offsets may differ form what is displayed here, depending on the current status of daylight savings within a given city.</p></em>
                    </div>
                </div>   
                </div>
            </Col>
        </Row>
        )
    
}
