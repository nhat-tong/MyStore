using System.Collections.Generic;

namespace MyStore.Data.Entities
{
    public class Customer 
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Company { get; set; }
    public string Phone { get; set; }

    public string Username { get; set; }

    public ICollection<Address> Addresses { get; set; } = new List<Address>();
  }
}
