# Procedimento ingressar no Domínio

## Install packages
```yaml
$ yum -y install sssd realmd oddjob oddjob-mkhomedir adcli samba-common \
samba-common-tools krb5-workstation openldap-clients policycoreutils-python \
samba-common-tools policycoreutils-devel
```

## Add ao Dominio
```yaml
$ realm join --user="nome-usuario-admin" "nome do dominio"
```
```yaml
$ sed -i 's/use_fully_qualified_names = True/use_fully_qualified_names = False/' /etc/sssd/sssd.conf

$ sed -i "s|%u@%d|%u|g"  /etc/sssd/sssd.conf

$ systemctl restart sssd.service

$ systemctl enable sssd.service

$ reboot
```

