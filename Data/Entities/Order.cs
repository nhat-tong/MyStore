using System;
using System.Collections.Generic;

namespace MyStore.Data.Entities
{
    public class Order
  {
    public int Id { get; set; }
    public string OrderNumber { get; internal set; }
    public DateTime OrderDate { get; set; }

    public Customer Customer { get; set; }
    public Address Address { get; set; }

    public ICollection<OrderItem> Items { get; set; }
  }
}
