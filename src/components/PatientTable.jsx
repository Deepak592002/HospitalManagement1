export default function PatientTable(){
    const dummyPatients = [
        { patient_id: 1, name: 'John Doe', email: 'john.doe@example.com', instance: 1, status: true },
        { patient_id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', instance: 2, status: false },
        { patient_id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', instance: 3, status: true },
       
        { patient_id: 4, name: 'Bob Williams', email: 'bob.williams@example.com', instance: 1, status: false }
    ]
    return(
       <div className="container px-10 py-10 mx-auto ">
            <div className="overflow-x-auto min-w-full">
                <table className="min-w-full  ">
                    <thead className="sticky top-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Instance</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyPatients.map(patient => (
                            <tr key={patient.patient_id}>
                                <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{patient.email}</td>

                                <td className="px-6 py-4 whitespace-nowrap">{patient.instance}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{patient.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}