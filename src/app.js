import React, { useState } from 'react'
import Sidebar, { menu } from 'components/Sidebar'
import NavBar from 'components/Navbar'
import { Grid, MuiThemeProvider } from '@material-ui/core'
import Hypertension from 'collections/Hypertension'
import baseTheme from 'theme'
import KidneyDisease from 'collections/KidneyDisease'

function App() {
  const [currentDiseaseType, setCurrentDiseaseType] = useState(menu.HYPERTENSION)

  const handleSidebarChange = item => {
    setCurrentDiseaseType(item)
  }

  return (
    <MuiThemeProvider theme={baseTheme}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item container xs justify="center" spacing={4}>
          <Grid item xs md={3}>
            <Sidebar activeItem={currentDiseaseType} onItemChange={handleSidebarChange} />
          </Grid>
          <Grid item xs md={5}>
            {currentDiseaseType === menu.HYPERTENSION ? <Hypertension /> : <KidneyDisease />}
          </Grid>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default App
