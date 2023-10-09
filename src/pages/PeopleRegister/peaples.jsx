async function handleRegister(){
  const payload = {
    name: "Advogado Json3",
    document: "12345678910",
    type: "ADV",
    address: "Rua X, 15",
    complement: null,
    neighborhood: "Jardim h",
    zipcode: "07131190",
    city: "CitY A",
    uf: "SP",
    company: "Ind A",
    email: "advJ10@gmail.com",
    phone: "1199325950"
  };
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTNjYjljMC00NTI0LTQwYjctYmQwNy1mZGI2ZDY2YjYxYTAiLCJqdGkiOiJiY2JlYWUzY2M4ZDI2YjBiMWExNzJjMzdkYjg2NGFjOTA3YWE0OTBmZDg1NTQ4Y2QyMTI5MzNjNzA2MTM2YzMzZmViMGNlMmI2OTg3YjJlZCIsImlhdCI6MTY5NjcwMjkxMS4yMDA2MzgsIm5iZiI6MTY5NjcwMjkxMS4yMDA2NDMsImV4cCI6MTcyODMyNTMxMS4xNTM0MDcsInN1YiI6IjM0Iiwic2NvcGVzIjpbXX0.HjIDE6lg-e74NVa3FW0hfdd1djM0pv12D0Hg4XA4D-ZuO80OuflFDNquxRB5QBaJ8dFs9b22e9UjnyK-R1KGS4-la-M-iY5Ely87-idAkgT2Lh2_DCWH7m_aDKrn1GtZIOsHSEHpdQSRak9UO2uho_oqsDxTh8pDsoaNqQnCNWIOgye_tMHvITDXxBJ15OnXZv4-_pZJTlIppqRMlW1xZZrYpeFAMD2REix_T0zT9h136pWUQu8oC-JQnBKw2hU4ny_kKt4EppiQmH3CbaP_L5TYdPzXLZtjW9_sPB7uJT9nDr-1qB8LrvLnOHiAALQDWAjfgMY2fferDIMBvmLbNWP4ygjR6gkn6sW7Mc0Stvy4PZz3aZsoE0m4Pu_UBioFiJ8VQ6ywEPh90skQQy5lbWEFwisJERaDdDvtio5X22Eh3F8EzTNOz4jOb35wo4JtsXwxw-jPunt9kvVdWNIPzMxgiFO15QcDr92JnSjh2XGoB0Nbv0hZmpajgaI8YTENjiIb8cmUzF_mXesl-jIJoObe-vLQuYTX9lLEt8WS3vKNSoYTN80J2R_FgMDxpc0BzUmI0pGf55gXaB6KHTHrKYqrQEnwxe56aUJN0p_iCoO5XfULUs-zr99e6vNGXD93uXq5AtZ-IXOWft0JpMebtEIfq3LQZA-Ds2NYOddWYMw',
    'Accept': 'application/json'
  };


  try {
    const res = await axios.post("https://exato.m2fsolucoes.com/api/peaple/create", payload, { headers });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
  
}


handleRegister()