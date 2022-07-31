import { Grid, Container, Card, Typography, Box } from '@mui/material'
import Head from 'next/head'
import TableCid from '../../@core/components/cid/TableCid'
import FormCid from '../../@core/components/cid/FormCid'
import Cid from '../../@core/hooks/Cid.ts'
import { useState } from 'react'

const CreateCid = () => {
  const cids = [
    new Cid('cid 1', 'descrição 1', 'medicina', '1'),
    new Cid('cid 2', 'descrição 2', 'odontologia', '2'),
    new Cid('cid 3', 'descrição 3', 'nanocosmeticos', '3'),
    new Cid('cid 4', 'descrição 4', 'veterinario', '4'),
    new Cid('cid 5', 'descrição 5', 'medicina', '5'),
    new Cid('cid 6', 'descrição 6', 'medicina', '6'),
    new Cid('cid 7', 'descrição 7', 'medicina', '7'),
    new Cid('cid 8', 'descrição 8', 'medicina', '8')
  ]

  const [cid, setCid] = useState<Cid>(Cid.vazio())
  const [visible, setVisible] = useState<'tabela' | 'form'>('tabela')

  function cidSelect(cid: Cid) {
    setCid(cid)
    setVisible('form')
  }
  function cidDelete(cid: Cid) {
    console.log(cid.description)
  }
  function saveCid(cid: Cid) {
    console.log(cid)
    setVisible('tabela')
  }
  function newCid(cid: Cid) {
    setCid(cid.vazio)
    setVisible('form')
  }

  return (
    <div>
      <Head>
        <title>CID</title>
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
              <Typography variant='h5'>CID</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card>
                {visible === 'tabela' ? (
                  <>
                    <TableCid cid={cids} newCid={newCid} cidSelect={cidSelect} cidDelete={cidDelete} />
                  </>
                ) : (
                  <>
                    <FormCid cid={cid} cidModify={saveCid} backCid={() => setVisible('tabela')}></FormCid>
                  </>
                )}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}
export default CreateCid
