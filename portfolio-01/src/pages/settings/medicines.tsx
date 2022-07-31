import { Grid, Container, Card, Typography, CardHeader, Box } from '@mui/material'
import Head from 'next/head'
import Medicines from '../../@core/hooks/medicines'
import TableMedicines from '../../@core/components/medicines/TableMedicines'
import FormMedicines from '../../@core/components/medicines/FormMedicines'
import { useState } from 'react'

const CreatePatient = () => {
  const mediciness = [
    new Medicines(1, 'medicina 1', 'descrição 1', '1'),
    new Medicines(2, 'medicina 2', 'descrição 2', '2'),
    new Medicines(3, 'medicina 3', 'descrição 3', '3'),
    new Medicines(4, 'medicina 4', 'descrição 4', '4'),
    new Medicines(5, 'medicina 5', 'descrição 5', '5'),
    new Medicines(6, 'medicina 6', 'descrição 6', '6'),
    new Medicines(7, 'medicina 7', 'descrição 7', '7'),
    new Medicines(8, 'medicina 8', 'descrição 8', '8'),
    new Medicines(9, 'medicina 9', 'descrição 9', '9'),
    new Medicines(10, 'medicina 10', 'descrição 10', '10')
  ]
  const [medicines, setMedicines] = useState<Medicines>(Medicines.vazio())
  const [visible, setVisible] = useState<'tabela' | 'form'>('tabela')

  function medicinesSelect(medicines: Medicines) {
    setMedicines(medicines)
    setVisible('form')
  }
  function medicinesDelete(medicines: Medicines) {
    console.log(medicines.description)
  }
  function saveMedicines(medicines: Medicines) {
    console.log(medicines)
    setVisible('tabela')
  }
  function newMedicines(medicines: Medicines) {
    setMedicines(medicines.vazio)
    setVisible('form')
  }

  return (
    <>
      <Head>
        <title>Medicamentos</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant='h5'>Medicamentos</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card>
                {visible === 'tabela' ? (
                  <>
                    <TableMedicines
                      medicines={mediciness}
                      newMedicines={newMedicines}
                      medicinesSelect={medicinesSelect}
                      medicinesDelete={medicinesDelete}
                    />
                  </>
                ) : (
                  <>
                    <FormMedicines
                      medicines={medicines}
                      medicinesModify={saveMedicines}
                      backMedicines={() => setVisible('tabela')}
                    ></FormMedicines>
                  </>
                )}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default CreatePatient
