using MySql.Data.MySqlClient;

namespace proveit.DAO
{
    public class ConnectionFactory
    {
        public static MySqlConnection Build()
        {
            return new MySqlConnection("Server=proveit.mysql.database.azure.com;Database=Proveit;Uid=proveitadm;Pwd=@letscock5565;");
        }
    }
}
